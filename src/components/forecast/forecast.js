import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  //console.log(forecastDays);

  return (
    <div className="grid grid-cols-1">
      <h2 className="text-4xl mx-auto mt-10 text-white font-bold">Daily</h2>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="bg-white rounded-3xl grid grid-cols-2 items-center m-2">
                  <div className="flex  items-center py-1 px-3 gap-2">
                    <img
                      alt="weather"
                      className="w-10"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="text-base">{forecastDays[idx]}</label>
                  </div>
                  <div className="flex items-center justify-end gap-2 mr-4">
                    <label className="text-sm text-neutral-500">
                      {item.weather[0].description}
                    </label>
                    <label className="font-bold text-sm">
                      {Math.round(item.main.temp_min)}°C /
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="bg-blue-300/80 rounded-3xl text-white p-5 grid grid-cols-2 gap-x-5 gap-y-1 mb-5">
                <div className="grid grid-cols-2">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="grid grid-cols-2">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="grid grid-cols-2">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="grid grid-cols-2">
                  <label>Wind Speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="grid grid-cols-2">
                  <label>Sea Level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="grid grid-cols-2">
                  <label>Feels Like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
