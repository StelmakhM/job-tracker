import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getAllJobs } from "./allJobsThunk";

const initialFiltersState = {
	search: "",
	searchStatus: "all",
	searchType: "all",
	sort: "latest",
	sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
	isLoading: false,
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	stats: {},
	monthlyApplications: [],
	...initialFiltersState,
};

const allJobsSlice = createSlice({
	name: "allJobs",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getAllJobs.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllJobs.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.jobs = payload.jobs;
		});
		builder.addCase(getAllJobs.rejected, (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		});
	},
});

export const allJobsReducer = allJobsSlice.reducer;