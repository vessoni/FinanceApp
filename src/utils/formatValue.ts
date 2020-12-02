const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;

// const formatValue = (value: number): string =>
//   Intl.NumberFormat('en-GB', {
//     style: 'currency',
//     currency: 'gbp',
//   }).format(value);
// export default formatValue;
