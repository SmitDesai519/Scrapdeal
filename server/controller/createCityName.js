const CityName = require('../models/cityName')

exports.createcityname = async (req,res) =>{
    const cityName = new CityName({
        cityName:["Surat", "Rajkot", "Ahmedabad", "Vadodara", "Gandhinagar", "Bhavnagar", "Jamnagar", "Anand", "Navsari", "Morbi", "Bharuch", "Nadiad", "Junagadh", "Amreli"]
    })
    cityName.save()
    return res.status(200).json("city name created successfully")
}