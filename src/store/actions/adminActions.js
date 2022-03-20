import { getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService } from '../../services/userService';
import actionTypes from './actionTypes';
import { toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

// Gender
export const fetchGenderStart = (dispatch, getState) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })

            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

// Position
export const fetchPositionStart = (dispatch, getState) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION")
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('fetchPositionFailed error', e)
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

// Role
export const fetchRoleStart = (dispatch, getState) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('fetchRoleFailed error', e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

// create user
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed!")
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Fetch all users error!")
                dispatch(saveUserFailed())
            }
        } catch (e) {
            dispatch(saveUserFailed())
            toast.error("Fetch all users error!")
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

// read user
export const fetchAllUsersStart = (dispatch, getState) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                dispatch(fetchAllUsersFailed())
            }
        } catch (e) {
            dispatch(fetchAllUsersFailed())
            console.log('fetchAllUsersFailed error', e)
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})

// delete user
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete the user succeed!")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Delete the user error!")
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            toast.error("Delete the user error!")
            dispatch(deleteUserFailed())
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

// Edit
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Update the user succeed!")
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error("Update the user error!")
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error("Update the user error!")
            dispatch(editUserFailed())
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})