let data_joueur=[
    {
      "Nom": "Hugo Ekitike",
      "Trophé total": 1,
      "Trophé PSG": 0
    },
    {
      "Nom": "Nordi Mukiele",
      "Trophé total": 2,
      "Trophé PSG": 1
    },
    {
      "Nom": "Fabián Ruiz",
      "Trophé total": 3,
      "Trophé PSG": 0
    },
    {
      "Nom": "Renato Sanches",
      "Trophé total": 8,
      "Trophé PSG": 2
    },
    {
      "Nom": "Carlos Soler",
      "Trophé total": 3,
      "Trophé PSG": 0
    },
    {
      "Nom": "Vitinha",
      "Trophé total": 6,
      "Trophé PSG": 1
    },
    {
      "Nom": "Gianluigi Donnarumma",
      "Trophé total": 4,
      "Trophé PSG": 1
    },
    {
      "Nom": "Achraf Hakimi",
      "Trophé total": 8,
      "Trophé PSG": 2
    },
    {
      "Nom": "Nuno Mendes",
      "Trophé total": 5,
      "Trophé PSG": 2
    },
    {
      "Nom": "Lionel Messi",
      "Trophé total": 48,
      "Trophé PSG": 2
    },
    {
      "Nom": "Sergio Ramos",
      "Trophé total": 28,
      "Trophé PSG": 1
    },
    {
      "Nom": "Alexandre Letellier",
      "Trophé total": 3,
      "Trophé PSG": 1
    },
    {
      "Nom": "Danilo Pereira",
      "Trophé total": 9,
      "Trophé PSG": 3
    },
    {
      "Nom": "Keylor Navas",
      "Trophé total": 31,
      "Trophé PSG": 10
    },
    {
      "Nom": "Sergio Rico",
      "Trophé total": 2,
      "Trophé PSG": 1
    },
    {
      "Nom": "Pablo Sarabia",
      "Trophé total": 5,
      "Trophé PSG": 4
    },
    {
      "Nom": "Juan Bernat",
      "Trophé total": 9,
      "Trophé PSG": 4
    },
    {
      "Nom": "Kylian Mbappé",
      "Trophé total": 28,
      "Trophé PSG": 18
    },
    {
      "Nom": "Neymar",
      "Trophé total": 29,
      "Trophé PSG": 17
    },
    {
      "Nom": "Presnel Kimpembe",
      "Trophé total": 14,
      "Trophé PSG": 12
    },
    {
      "Nom": "Marquinhos",
      "Trophé total": 30,
      "Trophé PSG": 27
    },
    {
      "Nom": "Marco Verratti",
      "Trophé total": 31,
      "Trophé PSG": 29
    }
  ]
  
  let largeurDesBarres = 1000/data_joueur.length;
  let ratioVertical = 10;
  
  d3.select("#dessin")
      .selectAll("g")
      .data(data_joueur)
      .enter()
      .append("g")
      .attr("transform",(d,i) =>`translate(${i*largeurDesBarres},250)`)
      .attr("class", "paire")
      ;
  
  d3.selectAll(".paire")
      .append("rect")
      .attr("width", largeurDesBarres)
      .attr("height", d=> d["Trophé total"]*ratioVertical)
      .attr("transform", "scale(1,-1)")
      .style("fill", "yellow")


    const axesB = d3.axisBottom(d3.scaleLinear().domain([0, 22]).range([0,1000]))
        .ticks(22)
 
     const axesL = d3.axisLeft(d3.scaleLinear().domain([50, 0]).range([-250, 250]))
      .ticks(10)

      d3.select("#dessin")
        .append("g")
        .attr("transform", "translate(0,250)")
        .call(axesB)
        .style("font-size", "1vw")


  d3.select("#dessin")
      .append("g")
      .call(axesL)
      .style("font-size", "1vw")

  d3.select('#forme-select')
  .on('change', function() {      
    let trophé = d3.select(this).property('value');
    console.log(trophé);
    
   
    d3.selectAll(".paire rect")
    .attr("height", d=> d[trophé]*ratioVertical)  
});
