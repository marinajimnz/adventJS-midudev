function wrapping(gifts) 
{
    const wrapped = [];
    for(let i = 0; i < gifts.length; i++)
    {
      let gift = gifts[i];
      let wrap = '*'.repeat(gift.length + 2);
      wrapped.push(`${wrap}\n*${gift}*\n${wrap}`);
    }
    return (wrapped);
  }