export const addToReadingList = (payload) => {
  return {
    type: "ADD_TO_READING_LIST",
    payload,
  };
};

const removeFromReadingList = (payload) => {
  return {
    type: "REMOVE_FROM_READING_LIST",
    payload,
  };
};
