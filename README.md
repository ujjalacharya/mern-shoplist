## Steps for implementing Redux in React

**Step1**
    ##### Create Store: It's the entry point for redux, it'll import things from the reducer

**Step2**
    ##### Wrap app component by <Provider> import from 'react-redux'

**Step3**
    ##### Make reducer
        * As it may have multiple reducers like, auth reducer, items reducer ets, use combine reducer and import individual reducers
        * Make individual reducers
**Step4**
    ##### In individual reducers, have the list of states

**Step5**
    ##### Create actions
        * Make the action-types
        * Make individual item's action

**Step6**
    ##### In main file use mapStateToProps and introduce PropTypes

**Step7**
    ##### In componentWillMount Life cycle method, call the action