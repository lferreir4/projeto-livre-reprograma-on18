const app = require("./src/app");

const PORT = process.env.PORT || 1999;

app.listen(PORT, () => console.log(`One Piece ${PORT}`));
