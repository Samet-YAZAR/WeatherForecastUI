# Weather-Forecast-UI
# USED APIs 
 * Weatherbit API
   * Current Weather API
   * Forecast API (16 day/ daily)
 * Teleport APIs
   * Urban areas (for city photos)
## Used language : React
### Use-case : 
  * Get weather forecast information for specific city
### Actor : 
  * User
### Purpose and Context : 
  * User wants to acquire current and 5 days weather forecast information for a city.
### Assumptions and pre-conditions : 
  * User has been authenticated by key value.
### Basic flow of event
  1. The system shows a form containing city and country input boxes.
  2. User enters city name and country name or country code
  3. The system shows current weather information under the "Current" tab, and 5 day  forecasts under the "Forecast" tab.
  4. The system brings given city photo to the background.
### Alternative flow of events
  * 1a1 User enters city and country name or code incorrectly
  * 1a2 The system shows warning message
  * 1a3 Event start from the step 1
  
### Post Condition 
  * Requested information has provided to the user.
  

