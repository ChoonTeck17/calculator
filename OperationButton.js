import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.chooseOpe, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}