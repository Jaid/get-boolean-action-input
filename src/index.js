/** @module get-boolean-action-input */

import {getInput} from "@actions/core"

/**
 * @function
 * @param {string} inputKey
 * @param {Object} getInputOptions
 * @returns {boolean} Input value as defined in workflow file
 * @example
 * import getBooleanActionInput from "get-boolean-action-input"
 * const result = getBooleanActionInput("shouldFetchSomething")
 * result === true
 */
export default (inputKey, getInputOptions) => {
  const value = getInput(inputKey, getInputOptions)
  return /^\s*(true|1)\s*$/i.test(value)
}