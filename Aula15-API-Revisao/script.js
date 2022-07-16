async function getLocations() {
    const resp = await fetch(
        `https://rickandmortyapi.com/api/location?page=${page}`,
    );
    const data = await resp.json();

    data.results.forEach(location => {
        locationList.insertAdjacentHTML(
            'beforeend',
            `<div class="card">
              <img class="planet" src="https://i.imgur.com/zXy9SK5.png">
              <h2>${location.name}</h2>
              <div class="details">
                <h4>Id</h4>
                <p>${location.id}</p>
                <h4>Tipo</h4>
                <p>${location.type}</p>
                <h4>Dimensão</h4>
                <p>${location.dimension}</p>
                <h4>População</h4>
                <p>${location.residents.length}</p>
              </div>
          </div>
          `,
        );
    });

    // Linhas novas
    if (page > 1) {
        document.getElementById('view-more-btn').style.display = 'none';
    }
}

getLocations();

// Linhas novas

// Ver mais (Paginação)

function viewMore() {
    page++;
    getLocations();
}

// Scroll infinito

window.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
        viewMore();
    }
});
