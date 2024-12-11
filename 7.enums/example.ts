enum Direction {
    up,
    down,
    left,
    right
}

function move(direction){
    console.log(`move${Direction[direction]}`.toLocaleLowerCase())
}
move(Direction.left)