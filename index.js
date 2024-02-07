document.getElementById('calculateBtn').addEventListener('click', async function () {
          const yourName = document.getElementById('yourName').value;
          const partnerName = document.getElementById('partnerName').value;
        
          try {
            const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${partnerName}`, {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '28b40b772dmshdfa76563dbecdb3p1e2263jsn498604431ccc',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
              }
            });
        
            const data = await response.json();
            displayResult(data);
          } catch (error) {
            console.error(error);
          }
        });
        
        function displayResult(data) {
          const resultContainer = document.getElementById('result');
          resultContainer.innerHTML = `Love Percentage: ${data.percentage}%<br>${data.result}`;
        }
        