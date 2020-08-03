const initialState = {
    allNews: [],
    topNews: [],
    currentId: null
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_NEWS":
            return state = { ...state, allNews: [ ...action.value ] }
        case "ADD_TOP_NEWS":
            return state = { ...state, topNews: [ ...action.value ] }
        default:
            return state;       
    }
}