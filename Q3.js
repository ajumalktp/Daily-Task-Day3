function longestCountryName(countries) {
    let longestName = "";
  
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].length > longestName.length) {
        longestName = countries[i];
      }
    }
  
    console.log(longestName);
  }
  
longestCountryName(["Australia", "Germany", "United States of America"]);
  