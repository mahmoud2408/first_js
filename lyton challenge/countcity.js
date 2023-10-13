function count(people) {
  return people.reduce((citycount, person) => {
    const city = person.city;
    citycount[city] = citycount[city]++;
    return citycount;
  }, {});
}
