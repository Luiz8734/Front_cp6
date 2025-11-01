document.addEventListener('DOMContentLoaded', function () {

    const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';

    const bookList = document.getElementById('book-list');

    const casaDoCodigoUrl = 'https://www.casadocodigo.com.br/collections/livros-de-front-end';

 

    fetch(booksEndpoint)

      .then(response => response.json())

      .then(data => {

        // Verificar se os dados estão em um objeto 'livros' ou são um array direto

        const books = data.livros || data || [];

        books.forEach((book, index) => {

          const bookElement = document.createElement('div');

          bookElement.classList.add('book', `book-${book.id}`);

          bookElement.style.opacity = '0';
          bookElement.style.transform = 'translateY(30px)';
          bookElement.style.transition = 'all 0.5s ease';

         

          const bookImage = book.imagem || book.capa || '';

          const bookTitle = book.titulo || 'Sem título';

          const bookDescription = book.resumo || book.descricao || book.desc || 'Descrição não disponível';

         

          bookElement.innerHTML = `

            <div class="card-hover bg-white rounded-xl shadow-md p-6 h-full flex flex-col overflow-hidden relative group border-2 border-yellow-400">

              ${bookImage ? `

                <div class="overflow-hidden rounded-lg mb-5 relative">

                  <img

                    src="${bookImage}"

                    alt="${bookTitle}"

                    class="img-hover w-full h-72 object-cover"

                    loading="lazy"

                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbSBu428gZGlzcG9u7XZlbDwvdGV4dD48L3N2Zz4='; this.onerror=null;"

                  >

                </div>

              ` : `

                <div class="w-full h-72 bg-yellow-100 rounded-lg mb-5 flex items-center justify-center border-2 border-red-600">

                  <span class="text-6xl">📚</span>

                </div>

              `}

              <div class="flex-grow flex flex-col">

                <h3 class="text-xl font-bold mb-3 text-gray-800 leading-tight group-hover:text-red-600 transition-colors duration-300">

                  ${bookTitle}

                </h3>

                <p class="text-gray-600 mb-6 text-sm leading-relaxed flex-grow line-clamp-4">

                  ${bookDescription}

                </p>

                <a

                  href="${casaDoCodigoUrl}"

                  target="_blank"

                  rel="noopener noreferrer"

                  class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg inline-block font-bold text-center transition-colors duration-300 shadow-md hover:shadow-lg w-full text-center">

                  Ver mais detalhes →

                </a>

              </div>

            </div>

          `;

         

          bookList.appendChild(bookElement);

          

          // Animação de entrada escalonada

          setTimeout(() => {

            bookElement.style.opacity = '1';

            bookElement.style.transform = 'translateY(0)';

          }, index * 100);

        });

      })

      .catch(error => {

        console.error('Erro ao carregar os livros:', error);

        bookList.innerHTML = `

          <div class="col-span-full text-center p-12">

            <div class="inline-block bg-white rounded-2xl p-8 shadow-lg max-w-md border-2 border-red-600">

              <p class="text-red-600 text-lg font-semibold mb-2">Erro ao carregar os livros</p>

              <p class="text-gray-600 text-sm">Por favor, verifique sua conexão e tente novamente mais tarde.</p>

            </div>

          </div>

        `;

      });

  });
