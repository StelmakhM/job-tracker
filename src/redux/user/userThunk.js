import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import instance from "../../utils/axios";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";
import { logoutUser } from "./userSlice";

export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thunkAPI) => {
		try {
			const { data } = await instance.post("auth/register", user);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thunkAPI) => {
		try {
			const { data } = await instance.post("/auth/login", user);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response);
		}
	}
);

export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkAPI) => {
		try {
			const { data } = await instance.patch("/auth/updateuser", user);
			return data;
		} catch (error) {
			if (error.response.status === 401) {
				thunkAPI.dispatch(logoutUser());
				return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
			}
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const clearStore = createAsyncThunk(
	"user/clearStore",
	async (message, thunkAPI) => {
		try {
			thunkAPI.dispatch(logoutUser(message));
			thunkAPI.dispatch(clearAllJobsState());
			thunkAPI.dispatch(clearValues());
			return Promise.resolve();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
