// Common module for shared constants/functions

export const levelOfNeedOpts = [
    {"type": 1, "desc": "No intervention necessary"},
    {"type": 2, "desc": "Signpost to other resources"},
    {"type": 3, "desc": "Information, advice and guidance (IAG)"},
    {"type": 4, "desc": "Coaching and skills"},
    {"type": 5, "desc": "Coaching engagement skills"},
    {"type": 6, "desc": "Intensive support needed"},
  ]
  
export const rightsStatusOpts = [
    {"type": 1, "desc": "No intervention necessary"},
    {"type": 2, "desc": "No recourse to public funds"},
  ]
  
export const housingStatusOpts = [
    {"type": 1, "desc": "No intervention necessary"},
    {"type": 2, "desc": "At risk"},
    {"type": 3, "desc": "Unsuitable temporary accommodation"},
    {"type": 4, "desc": "Rough sleeping"},
  ]
  
export const langProficiencyOpts = [
    {"type": 1, "desc": "Good"},
    {"type": 2, "desc": "Bad"},
    {"type": 3, "desc": "Ugly"},
  ]

export function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getLanguagesDisplay(languages) {
    var languages_str = "\n";

    Object.entries(languages).forEach((entry) => {
      let description = getDescFromType(entry[1], langProficiencyOpts);
      languages_str += " * " + capitalise(entry[0]) + " (" + description + ")\n";
    })

    return languages_str.slice(0, -1);
}

export function getDescFromType(type, options) {
    // Assumes that options is an array of objects with type and desc attributes
    return options.filter(o => o.type === type)[0].desc
}
