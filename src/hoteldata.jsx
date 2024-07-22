/* Denna funktion skapar en lista av hotell. */
export function getHotelData() {
  return hotelData;
}

/* Denna funktion hämtar en enskild bok med dess ID. */
export function getHotelByID(ID) {
  return hotelData.find(hotel => hotel.hotelID == ID);
}
  
/* Denna funktion används för sökfunktionen. */
export function getHotel(country) {
  if (country == "" || country == "all") {
    return hotelData;
  } else {
    return hotelData.filter((x) => x.country.toLowerCase().indexOf(country.toLowerCase()) > -1
    )
    }
  }
/* Funktionen filtererar hotelData och toLowerCase gör det möjligt att söka med både stora och små bokstäver. */

/* Nedan finns vår objektarray-lista med hårdkodade hotelldata för de sex hotellen. Här finns namn på hotellen (title), underrubrik (subTitle), beskrivning av hotellet (desc), bild, land och pris för hotellet per rum och per natt. Denna data hämtas till de andra komponenterna. */
const hotelData = [
  {
    hotelID: 1,
    title: 'Ibis Barcelona Meridians',
    subTitle: 'Familjevänligt hotell',
    desc: 'Ibis Barcelona Meridians ligger mindre än 10 minuter bilfärd från Sagrada Familia och Plaça de Catalina. Du kan varva ned med en drink i en bar/lounge eller äta något gott på deras restaurang. Dessutom ligger både Passeig de Gracia och Casa Batllo en kort biltur härifrån. Boendet ligger bara en kort promenad från kollektivtrafik. Till Fabra i Puig Station tar det 9 minuter att gå och till Llucmajor Station är det 10 minuter.',
    image:
      'https://images.trvl-media.com/lodging/1000000/810000/807700/807643/8d81c10c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    country: 'Spanien',
    price: '1200kr/natt per rum',
  },
  {
    hotelID: 2,
    title: 'Hotel Dom Carlos Park',
    subTitle: 'Centralt hotell',
    desc: 'Endast fem minuters bilfärd från Praça do Rossio och Avenida da Liberdade hittar du Hotel Dom Carlos Park, som erbjuder flygplatstransfer (tillgänglig dygnet runt) mot en avgift på EUR 45 per fordon. Här kan du varva ned med en drink i en bar/lounge, och dessutom serveras frukostbuffé dagligen. Hotellet ligger dessutom 1,9 km från Elevador de Santa Justa och 2,2 km från Castelo de São Jorge. Andra resenärer brukar uppskatta närheten till kollektivtrafik. Marquês de Pombal Station ligger 4 minuter bort och till Parque Station tar det inte mer än 8 minuter att gå.',
    image: 'https://images.trvl-media.com/lodging/1000000/1000000/994300/994236/39bdbe31.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    country: 'Portugal',
    price: '900kr/natt per rum',
  },
  {
    hotelID: 3,
    title: 'Hôtel Cervantes by Happyculture',
    subTitle: 'Nära till allt',
    desc: 'Hôtel Cervantes by Happyculture ligger bara 5 minuters bilfärd från Opéra Garnier och Champs-Elysees. La Machine du Moulin Rouge och Place de la Concorde ligger dessutom bara fem minuters bilfärd härifrån. Kollektivtrafik finns i närheten. Till Europe Metro tar det 4 minuter att gå och till Rome metrostation är det 4 minuter.',
    image: 'https://images.trvl-media.com/lodging/1000000/570000/562000/561982/a264efa5.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    country: 'Frankrike',
    price: '1400kr/natt per rum',
  },
  {
    hotelID: 4,
    title: 'Porto Royal Bridges Hotel',
    subTitle: 'Centralt hotell',
    desc: 'Porto Royal Bridges Hotel ståtar med ett läge 0,8 km från Ribeira-torget och 0,9 km från Portos historiska stadsdel, och erbjuder gäster flygplatstransfer (tillgänglig dygnet runt) mot en avgift på EUR 35 per person. Här kan du varva ned med en drink i en bar/lounge, och dessutom serveras kontinental frukost dagligen. Det centrala läget och närheten till områdets sevärdheter brukar uppskattas av våra resenärer. Boendet ligger bara en kort promenad från kollektivtrafik. Till Pr. D. João I hållplats tar det 2 minuter att gå och till Pr. da Liberdade hållplats är det 3 minuter.',
    image: 'https://images.trvl-media.com/lodging/28000000/27240000/27235000/27234933/f2a16cda.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    country: 'Portugal',
    price: '1500kr/natt per rum',
  },
  {
    hotelID: 5,
    title: 'Barceló Torre de Madrid',
    subTitle: 'Service i världsklass',
    desc: 'Barceló Torre de Madrid erbjuder gäster flygplatstransfer såväl som ett utmärkt läge, bara tio minuters promenad från Gran Via och Palacio Real de Madrid. Du kan ta något att äta på deras kafé eller unna dig sportmassage, bodywraps eller ansiktsbehandlingar. Dessutom får gäster tillgång till en inomhuspool, en bar/lounge och ett gym på detta hotell i lyxstil. Andra resenärer brukar uppskatta närheten till kollektivtrafik. Plaza de Espana station ligger 2 minuter bort och till Ventura Rodriguez station tar det inte mer än 5 minuter att gå.',
    image: 'https://images.trvl-media.com/lodging/16000000/15380000/15372000/15371941/90fe2f1d.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    country: 'Spanien',
    price: '1000kr/natt per rum',
  },
  {
    hotelID: 6,
    title: 'Hotel Villa Pamphili Roma',
    subTitle: 'Prisvärd spaupplevelse',
    desc: 'Hotel Villa Pamphili Roma, som ligger mindre än tio minuters bilfärd från Piazza Navona och Sankt Peterskyrkan, har en takterrass och erbjuder flygplatstransfer (tillgänglig dygnet runt) mot en avgift på EUR 50 per fordon. Här kan du skämma bort dig själv med djupmassage, aromaterapi eller ayurvediska behandlingar på deras spa, och avnjuta en god frukost, lunch eller middag på Ristorante AcquaViva, som specialiserar sig på lokala och internationella rätter. Detta hotell i lyxstil erbjuder även gäster tillgång till 2 barer/lounger, en bar vid poolen och ett fitnesscenter. Andra resenärer uppskattar restaurangen och den generella standarden. Kollektivtrafik finns i närheten. Till Casaletto Tram Stop är det inte mer än 14 minuters promenad.',
    image: 'https://images.trvl-media.com/lodging/1000000/10000/6100/6064/61d8e415.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    country: 'Italien',
    price: '1300kr/natt per rum'
  },
];

export default hotelData;