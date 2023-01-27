function createCube(size) {
    function dibujoCaraDeArriba(size) {
      let str = '';

      for (let index = 1; index <= size; index++) {
        const spaces = ` `.repeat(size - index)
        const sideFace = `/\\`.repeat(index)
        const topFace = `_\\`.repeat(size).concat('\n')

        str += spaces + sideFace + topFace
      }

      return str
    }
    
      function dibujoCaraDeAbajo(size){
        let str = '';

        for (let index = 0; index < size; index++) {
          const spaces = ` `.repeat(index)
          const sideFace = `\\/`.repeat(size - index)
          const topFace = `_/`.repeat(size).concat('\n')

          str += spaces + sideFace + topFace
      }

      return str.slice(0, -1)
    }
    return dibujoCaraDeArriba(size) + dibujoCaraDeAbajo(size)
  }