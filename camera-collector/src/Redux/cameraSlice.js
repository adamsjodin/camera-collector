import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCameras: [
        {
            id: 1,
            brand: "Leica",
            model: "m6",
            desc: "The legendary Leica M6 is an icon. Intuitive, compact and discreet, it allows you to get up close to the action – and to real emotions. Since 1984, it has been the camera of choice for many of the world's best photographers, who have used it to create countless iconic images.",
            img: "https://images.unsplash.com/photo-1653113058842-8fc664381b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            brand: "Mamiya",
            model: "rz67",
            desc: "The Mamiya RZ67 is a series of medium format system cameras primarily designed for using 120/220 film. It consists of three models: (a) the original Mamiya RZ67, introduced in 1982; (b) the Mamiya RZ67 Pro II, introduced in 1995; and (c) the Mamiya RZ67 Pro IID, introduced in 2004. The original RZ67 design was by Tsuneaki Munakata, who also designed the Mamiya ZM and Mamiya M645 Super.",
            img: "https://cdn.shopify.com/s/files/1/1530/2647/products/MAM-CE1097_002_2048x2048.jpg?v=1637613081"
        },
        {
            id: 3,
            brand: "Hasselblad",
            model: "500c/m",
            desc: "With multiple prototypes in the works in 1953, the final Hasselblad 500C was launched in 1957. Replacing the previous design of a focal plane shutter from the 1000F, the 500C utilized a leaf shutter design with its range of high-quality Carl Zeiss lenses.",
            img: "https://cdn.shopify.com/s/files/1/0521/9496/7750/products/Hassy500CMCB-4366_2048x.jpg?v=1634297893"
        },
        {
            id: 4,
            brand: "Nikon",
            model: "f3",
            desc: "The Nikon F3 was Nikon's third professional single-lens reflex camera body, preceded by the F and F2. Introduced in 1980, it had manual and semi-automatic exposure control whereby the camera would select the correct shutter speed (aperture priority automation). ",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Nikon_F3_with_HP_viewfinder.jpeg"
        },
        {
            id: 5,
            brand: "Contax",
            model: "T3",
            desc: "35mm auto focus compact camera released by Contax in 2001. Improved upon the T2 by restructuring the Sonnar lens as well as shedding weight and size. Also switched to a passive autofocus system. Titanium body available in black & champagne.",
            img: "https://www.35mmc.com/wp-content/uploads/2015/06/DSC1322.jpg"
        },
        {
            id: 6,
            brand: "Pentax",
            model: "6x7",
            desc: "The Pentax 6×7 is a Japanese medium format SLR roll film camera launched by Asahi Pentax in 1969. It produces 6×7 images on 120 or 220 roll film, selected by a small knob on the right hand side of the camera and by sliding the film pressure plate inside, giving either 10 or 20 pictures. ",
            img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pentax_6%C3%977_MU.JPG"
        },

    ],
    myCameras: []
}


export const cameraSlice = createSlice({
    name: 'cameras',
    initialState,
    reducers: {
        showCameras: (state) => {
            return (
                [...state.allCameras]
            )
        },
        addToMyCameras: (state, action) => {
            state.myCameras.push(action.payload);
        },
        removedFromMyCameras: (state, action) => {
            const remove = state.myCameras.findIndex((camera) => camera.id === action.payload.id)
            state.myCameras.splice(remove, 1)
        },
        addCameraToAllCameras: (state, action) => {
            state.allCameras.push(action.payload)
        }

    }
})

export const { showCameras, addToMyCameras, removedFromMyCameras, addCameraToAllCameras } = cameraSlice.actions;

export default cameraSlice.reducer

