const makePromiseObject = ():Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data:string = 'string';
        if (data) {
            resolve(data)
        }
        else {
            reject('failed to fetch data');
        }
      
  })
 
}

const getPromiseData = async():Promise<string> => {
    const data = await makePromiseObject()
    return data;
}