export const fetchingInitial = (array) => {
  return {
    type: 'FETCH_DATA',
    payload: array[0]
  };
};

export const nextPage = (indexNext) => {
  return {
    type: 'NEXT_PAGE',
    payload: indexNext
  };
};

export const previousPage = (indexPrevious) => {
  return {
    type: 'NEXT_PAGE',
    payload: indexPrevious
  };
};