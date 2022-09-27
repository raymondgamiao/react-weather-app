const CurrentWeather = ({ data }) => {
  var now = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  console.log(data);
  var date = now.getDate();
  var day = days[now.getDay()];
  var month = months[now.getMonth()];

  var sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-PH");
  var sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-PH");

  return (
    <>
      <div className="flex flex-col items-center text-white my-5">
        <p>{data.city}</p>
        <p>
          {day}, {date} {month}
        </p>
        <div className="flex flex-row items-center py-5">
          <img
            alt="weather"
            className="w-20"
            src={`icons/${data.weather[0].icon}.png`}
          />
          <h1 className="text-8xl font-bold">{Math.round(data.main.temp)}°</h1>
        </div>
        <p>
          {Math.round(data.main.temp_min)}°/{Math.round(data.main.temp_max)}°
          Feels like
          {Math.round(data.main.temp)}°
        </p>
        <p>{data.weather[0].description}</p>
      </div>

      <div className="bg-blue-300/80 text-white px-10 py-5 sm:w-full  grid grid-cols-2 gap-5 rounded-3xl  mx-auto">
        <p>Humidity</p>
        <p className="text-end">{data.main.humidity}%</p>
        <p>Pressure</p>
        <p className="text-end">{data.main.pressure} </p>
        <p>Wind Speed</p>
        <p className="text-end">{data.wind.speed} m/s</p>
        <p>Wind Gust</p>
        <p className="text-end">{data.wind.gust} </p>
        <p>Sunrise</p>
        <p className="text-end">{sunrise}</p>
        <p>Sunset</p>
        <p className="text-end">{sunset} </p>
      </div>
    </>
  );
};

export default CurrentWeather;
