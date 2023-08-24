const api_url = 'https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817';
        const loadingElement = document.getElementById('loading');
        const employeesTable = document.getElementById('employees');

        async function fetchAPI(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    hideLoader();
                    showData(data.data);
                } else {
                    console.error('API request failed:', response.statusText);
                }
            } catch (error) {
                loadingElement.innerHTML = 'Error fetching data';
                console.error('Error fetching data:', error);
            }
        }

        function hideLoader() {
            loadingElement.style.display = 'none';
        }

        function showData(data) {
            const headerRow = `
                <tr>
                    <th>Name</th>
                    <th>Office</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            `;

            var rows = '';
            for (var i = 0; i < data.length; i++) {
                var r = data[i];
                var row = `<tr> 
                    <td>${r.name}</td>
                    <td>${r.office}</td>
                    <td>${r.position}</td>
                    <td>${r.salary}</td>
                </tr>`;
                rows += row;
    }

            employeesTable.innerHTML = headerRow + rows;
        }
fetchAPI(api_url);
    