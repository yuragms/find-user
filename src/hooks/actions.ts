import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { githubActions } from "../store/github/github.slisce"

const actions = {
    ...githubActions
}


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)

}