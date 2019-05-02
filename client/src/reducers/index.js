export const pagination = ( state = {indexA: 0, indexB: 19}, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        indexA: action.payload.a,
        indexB: action.payload.b
      }
    case 'PREVIOUS_PAGE':
      return {
        indexA: action.payload.a,
        indexB: action.payload.b
      }
    default:
      return state
  }
}

export const fetchOrigin = ( state = [], action ) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload;
    default:
      return state;
  }
};
