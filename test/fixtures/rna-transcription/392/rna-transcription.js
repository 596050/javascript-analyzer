module.exports.toRna = dna => {
  return dna
    .split('')
    .map(char => {
      switch (char) {
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        case 'T':
          return 'A';
        case 'A':
          return 'U';
        default:
          throw new Error('Invalid input DNA.');
      }
    })
    .join('');
};
