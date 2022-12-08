const app = require("../app");
const request = require("supertest");
const model = require("../models/tsunnyModels");

describe("Tsunny Controller", () => {
  const pirateMock = {
    email: "luffy@onepiece.com",
    password: "1234",
    preferenceName: "Luffy",
  };

  beforeAll(async () => {
    const newPirate = new model(pirateMock);
    await newPirate.save();

    pirateMock.id = newPirate._id;
  });

  afterAll(async () => {
    await model.deleteMany();
  });

  test("GET /pirates/all", (done) => {
    request(app)
      .get("/pirates/all")
      .expect(200)
      .expect((res) => {
        expect(res.body.message).toBe("Pirates super loaded");
        expect(res.body.pirate).toBe();
      })
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test("POST /pirates/create", (done) => {
    const piratesBody = {
      email: "nrobin@onepiece.com",
      password: "1234",
      preferenceName: "Nico Robin",
    };

    request(app)
      .post("/pirates/create")
      .send(piratesBody)
      .expect(201)
      .expect((res) => {
        expect(res.body.pirate.email).toBe("nrobin@onepiece.com");
      })
      .end((err) => {
        return done(err);
      });
  });

  test("PUT /pirates/update/:id", (done) => {
    const piratesBody = {
      email: "nami@onepiece.com",
      preferenceName: "Nami",
    };
    request(app)
      .put("/pirates/update/" + pirateMock.id)
      .send(piratesBody)
      .set("Accept", "application/json")
      .expect(200)
      .expect((res) => {
        expect(res.body.pirate.email).toBe("nami@onepiece.com");
        expect(res.body.pirate.preferenceName).toBe("Nami");
      })
      .end((err) => done(err));
  });

  test("GET /pirates/:id", (done) => {
    request(app)
      .get(`/pirates/${pirateMock.id}`)
      .expect(200)
      .end((err) => done(err));
  });

  test("DELETE /pirates/delete/:id", (done) => {
    request(app)
      .delete(`/pirates/delete/${pirateMock.id}`)
      .expect(200)
      .end((err) => done(err));
  });
});
