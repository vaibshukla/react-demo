import React , {useState} from "react";

const ANIMALS = [
    'cat',
    'dog',
    'bird'
]
const SearchParam = () => {

  const [location , setLocation] =  useState("Seattle. WA");
  const [animal ,setAnimal] = useState();
  const [breed , setBreed] = useState();
  const [breeds , setBreeds ] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location.toUpperCase()}
            onChange={(e)=> setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
            <select id="animal"
                value={animal}
                onChange={(e) =>  setAnimal(e.target.value)}
                onBlur={(e) =>  setAnimal(e.target.value)}
            >
                <option />
                {ANIMALS.map((item) => {
                    return (<option value={item} key={item}>{item}</option>)
                })}
            </select>
        </label>

        
        <label htmlFor="animal">
            <select id="animal"
                value={animal}
                onChange={(e) =>  setAnimal(e.target.value)}
                onBlur={(e) =>  setAnimal(e.target.value)}
            >
                <option />
                {ANIMALS.map((item) => {
                    return (<option value={item} key={item}>{item}</option>)
                })}
            </select>
        </label>
        
        <label htmlFor="breed">
            <select id="breed"
                value={breed}
                onChange={(e) =>  setBreed(e.target.value)}
                onBlur={(e) =>  setBreed(e.target.value)}
            >
                <option />
                {breeds.map((item) => {
                    return (<option value={item} key={item}>{item}</option>)
                })}
            </select>
        </label>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParam;
