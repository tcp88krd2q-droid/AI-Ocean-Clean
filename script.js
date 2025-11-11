document.getElementById('analyzeBtn').addEventListener('click', function() {
  const result = document.getElementById('result');
  result.innerHTML = "🔍 AI가 이미지를 분석 중입니다...";

  setTimeout(() => {
    result.innerHTML = "✅ 분석 완료! 쓰레기 종류별 비율을 아래 그래프로 보여줍니다.";
    showChart();
  }, 2000);
});

function showChart() {
  const ctx = document.getElementById('resultChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['플라스틱', '어망', '유리병', '기타'],
      datasets: [{
        data: [50, 25, 15, 10],
        backgroundColor: ['#00bcd4', '#4caf50', '#ff9800', '#9c27b0']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}
