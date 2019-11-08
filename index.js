// YOUR BOT HERE

function rand() {
  return Math.round(Math.random());
}

let { x, y } = API.getCurrentPosition();

if (rand()) {
  x = rand() ? x + 1 : x - 1;
  if (x <= 0) {
    x += 1;
  } else if (x >= API.getArenaSize() - 1) {
    x -= 1;
  }
} else {
  y = rand() ? y + 1 : y - 1;
  if (y <= 0) {
    y += 1;
  } else if (y >= API.getArenaSize() - 1) {
    y -= 1;
  }
}

API.move(x, y);
