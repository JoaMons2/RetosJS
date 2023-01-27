function distributeGifts(packOfGifts, reindeers) {
  function totalWeightSum(item){
    return item.reduce((acc, current)=> acc + current.length, 0)
  }
  const giftsWeight = totalWeightSum(packOfGifts)
  const reindeersWeight = totalWeightSum (reindeers) * 2
  return Math.floor(reindeersWeight / giftsWeight)
}

  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]

  const result = distributeGifts(packOfGifts, reindeers) // 2
  console.log(result);