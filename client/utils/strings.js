import R from '_utils/ramda';

export const capitalize = string => R.concat(R.toUpper(R.head(string)), R.tail(string));

export const placeholder = () => {};
