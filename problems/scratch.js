function sumRangeCursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeCursive(n - 1, total + n);
}
