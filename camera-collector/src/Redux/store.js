import { configureStore } from "@reduxjs/toolkit";
import cameraReducers from "./cameraSlice";
import logger from "redux-logger"

export const store = configureStore({
    reducer: {
        cameras: cameraReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})