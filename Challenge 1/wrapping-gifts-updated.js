function wrapping(gifts) {
    return gifts.map(function(gift){
      return '*'.repeat(gift.length + 2) + "\n*" + gift + "*\n" + '*'.repeat(gift.length + 2);
      })
  }