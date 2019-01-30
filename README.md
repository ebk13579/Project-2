# CLIPH

Steps to create table of historical temperature data:

1. Select a country to turn it red. 
2. The ISO country code that the Worldbank API uses is then displayed above the "Data" table.
3. At which point you may click "Create Table" to generate a table with temperature data from the respective country. 

~~~API-notes~~~

The Basic Request
The Climate Data API uses REST-based requests, in which the general form looks like this:

http://climatedataapi.worldbank.org/climateweb/rest/v1/country/type/var/start/end/ISO3[.ext]

All boldface variables except for ext in this instance are required. Note that all climate data API requests begin with http://climatedataapi.worldbank.org/climateweb/rest/, so for the sake of legibility, this portion of the URL will be assumed and omitted in the remaining code samples in this documentation.

   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
        $("#find-media").on("click", function (event) {
            event.preventDefault();
            var media = $("#media-input").val();
            var queryURL = "https://tools.cdc.gov/api/v2/resources/media?q=" + media;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                $("#search-list").empty();
                console.log(response);
...
     </script>
