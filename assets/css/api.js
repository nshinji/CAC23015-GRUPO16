const slider = document.getElementById("slider");
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=20").then((data)=>{
        //console.log(data.json());
        return data.json();
      })
        .then((jsondata)=>{
          console.log(jsondata[0].url)
          jsondata.map((val)=>{
            console.log(val);
            key = val.id;
            let img= document.createElement("img");
            img.src=`https://picsum.photos/200/300?random=${key}`;
            slider.appendChild(img);
  
          })
        })