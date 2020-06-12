export const SET_ACTIVITY_MODAL = 'SET_ACTIVITY_MODAL'
export const HIDE_ACTIVITY_MODAL = 'HIDE_ACTIVITY_MODAL'
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const ADD_FILTER = 'ADD_FILTER'
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const FETCH_ACTIVITY_HISTORY = 'FETCH_ACTIVITY_HISTORY'
export const FETCH_ACTIVITY_HISTORY_SUCCESS = 'FETCH_ACTIVITY_HISTORY_SUCCESS'
export const FETCH_ACTIVITY_HISTORY_FAILURE = 'FETCH_ACTIVITY_HISTORY_FAILURE'
export const SET_HAS_NEXT_PAGE = 'SET_HAS_NEXT_PAGE'
export const ERROR_DETAILS_DIALOG_ID = 'ERROR_DETAILS_DIALOG_ID'
export const SET_ERROR_DIALOG_DETAILS = 'SET_ERROR_DIALOG_DETAILS'

export const defaultFilter = new Set([
  'SENT_ACTIVITY',
  'RECEIVED_ACTIVITY',
  'PENDING_ACTIVITY',
  'EXPIRED_ACTIVITY',
  'INTERNAL_ACTIVITY',
])
