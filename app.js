const data = [
  {
    name: 'John',
    age: 29,
    gender: 'male',
    lookingfor: 'female',
    location: 'London UK',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: 'Gen',
    age: 21,
    gender: 'female',
    lookingfor: 'male',
    location: 'Essex UK',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'Bret',
    age: 45,
    gender: 'male',
    lookingfor: 'female',
    location: 'London UK',
    image: 'https://randomuser.me/api/portraits/men/90.jpg'
  }
]

const profiles = profileIterator(data);

// Call first profile

nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {


    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.preferance}</li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profileDisplay
    window.location.reload();
  }
}
// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false
      } : {done: true}
    }
  };
}
