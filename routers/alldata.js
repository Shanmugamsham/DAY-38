
const router= require("express").Router()


router.get("/",(req,res,next)=>{
    const showing={ 
    "Number of Seats available": 25,
    "amenities": "all",
    "Place for 1 hourse": 2500,
    "enter": "createroom"
 }
    res.json(showing)
})

router.post("/createroom",(req,res,next)=>{
    console.log();
    res.send(`ROOM IS created`)
   
})

router.post("/bookroom",(req,res,next)=>{
    const reqdata=req.body
    res.send(`ROOM IS BOOKED`)
})


router.get("/rooms",(req,res,next)=>{
    const roomsdata={
        "Room Name": "A24A",
        "Book Status": "Booked",
        "Customer Name": "shanmugam",
        "Date":"24-30-2024",
        "Start TIme": "10AM",
        "End Time": "6PM"
    }
    res.json(roomsdata)
})


router.get("/customer",(req,res,next)=>{
    const customerdata={
        "Customer Name": "shanmugam",
        "Room Name": "A24A",
        "Date":"24-30-2024",
        "Start TIme": "10AM",
        "End Time": "6PM"
    }
    res.json(customerdata)
})

router.get("/customerid",(req,res,next)=>{
    const customerdata_id={
        "Customer Name": "shanmugam",
        "Room Name": "A24A",
        "Date":"24-30-2024",
        "Start TIme": "10AM",
        "End Time": "6PM",
        "Booking Id": "4012546679AS1DS744",
        "Booking Date": "24-30-2024",
        "Booking Status": "BOOKED/2-TIME"
    }
    res.json(customerdata_id)
})



module.exports=router