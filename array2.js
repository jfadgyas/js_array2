const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie

    //Opdracht A
    const findSpiderMan = function(heroes){
        return heroes.find((hero) => hero.name == 'Spiderman');
    }
    
    console.log(findSpiderMan(superheroes));

    //Opdracht B
    const doubleArrayValues = (array) => array.map((values) => console.log(values*2));

    doubleArrayValues([1, 2, 3]);

    //Opdracht C
    const containsNumberBiggerThan10 = (array) => {console.log(
        array.some((items) => {return items>10})
        )};

    containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
    containsNumberBiggerThan10([1,2,1,2,1,2]);
    
    //Opdracht D
    const isItalyInTheGreat7 = (array) => {console.log(
        array.includes('Italy')
        )};

    isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']);
    
    //Opdracht E
    const tenfold = (array) => {
        array.forEach(multiply);
        return array;
    }

    const multiply = (item, index, newArray) => newArray[index] = item * 10;
        
    console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
    
    //Opdracht F
    const isBelow100 = (array) => array.every((item) => item<100)
    console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))

    //Opdracht G
    const bigSum = (array) => array.reduce((total, item) => {return total+item}, 0)
    console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))