const express = require("express")
const app = express()
app.use(express.static("build"))
const PORT = process.env.PORT || 5000
app.get("/api", (req, res) => {
    res.send(["Tanake Manu!"])
})
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))