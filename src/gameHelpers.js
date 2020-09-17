const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;

const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // We're in the Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // The move is inside the game area: vertical
          !stage[y + player.pos.y + moveY] ||
          // and horizontal
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // We're not moving to a clear cell
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
};

export { STAGE_WIDTH, STAGE_HEIGHT, createStage, checkCollision };
