const types = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  REMOVE: "REMOVE",
  REMOVECOMPLETED: "REMOVECOMPLETED"
}

export const actionCreators = {
  ADD: (value)=>({
    type: types.ADD,
    //Receive todo structure
    //{ text: '', isChecked: ''}
    payload: value,
  }),
  TOGGLE: (value)=>({
    type: types.TOGGLE,
    payload: value,//receive boolean of isToggle
  }),
  REMOVE: (value)=>({
    type: types.REMOVE,
    payload: value, //receive an ID in number
  }),
  REMOVECOMPLETED: () => ({
    type: types.REMOVECOMPLETED,
    payload: null,
  })
}

/**
  Data structure:
  items: [{
    name: ,
    iscompleted, 
  }]
*/
const initialState = {
  items: [],
}

const removeToDoReducer = (state, payload) => {
  return ({
    ...state,
    items: state.items.filter((item, index)=>(
      index !== payload
    ))
  })
}

const addToDoReducer = (state, payload) => {
  return ({
    ...state,
    items: [...state.items, payload],
  })
}

const toggleToDoReducer = (state, payload) => {
  return ({
    ...state,
    items: state.items.map((item, index)=>{
      if(index === payload){
        return {text: item.text, isChecked: !item.isChecked}
      }

      return item
    })
  })
}

const removeCompletedReducer = (state) => {
  return ({
    ...state,
    items: state.items.filter((item)=>!item.isChecked),
  })
}


export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.ADD:
      return addToDoReducer(state, payload)
    case types.TOGGLE:
      return toggleToDoReducer(state, payload)
    case types.REMOVE:
      return removeToDoReducer(state, payload)
    case types.REMOVECOMPLETED:
      return removeCompletedReducer(state, payload)
    default: {
      return state
    }
  }

}
