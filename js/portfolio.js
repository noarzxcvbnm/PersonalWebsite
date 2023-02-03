        // <![CDATA[
            function show_A_part() {
            var show_A_part = document.getElementById('show_A_part');
            var content_A_part = document.getElementById('content_A_part');
    
                if (content_A_part.style.display === 'none') {

                    content_A_part.style.display = 'block';
                    document.querySelector('.portfolio-nav-topBtn-A').classList.add('portfolio-nav-topBtn-now')

                    content_B_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-B').classList.remove('portfolio-nav-topBtn-now')

                    content_C_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-C').classList.remove('portfolio-nav-topBtn-now')

                    content_D_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-D').classList.remove('portfolio-nav-topBtn-now')
                }
    
            }
            function show_B_part() {
            var show_B_part = document.getElementById('show_B_part');
            var content_B_part = document.getElementById('content_B_part');
    
                if (content_B_part.style.display === 'none') {

                    content_A_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-A').classList.remove('portfolio-nav-topBtn-now')

                    content_B_part.style.display = 'block';
                    document.querySelector('.portfolio-nav-topBtn-B').classList.add('portfolio-nav-topBtn-now')

                    content_C_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-C').classList.remove('portfolio-nav-topBtn-now')

                    content_D_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-D').classList.remove('portfolio-nav-topBtn-now')
                }
            }
            function show_C_part() {
            var show_C_part = document.getElementById('show_C_part');
            var content_C_part = document.getElementById('content_C_part');
    
                if (content_C_part.style.display === 'none') {

                    content_A_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-A').classList.remove('portfolio-nav-topBtn-now')

                    content_B_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-B').classList.remove('portfolio-nav-topBtn-now')

                    content_C_part.style.display = 'block';
                    document.querySelector('.portfolio-nav-topBtn-C').classList.add('portfolio-nav-topBtn-now')

                    content_D_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-D').classList.remove('portfolio-nav-topBtn-now')
                }
            }
            function show_D_part() {
            var show_D_part = document.getElementById('show_D_part');
            var content_D_part = document.getElementById('content_D_part');
    
                if (content_D_part.style.display === 'none') {

                    content_A_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-A').classList.remove('portfolio-nav-topBtn-now')

                    content_B_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-B').classList.remove('portfolio-nav-topBtn-now')

                    content_C_part.style.display = 'none';
                    document.querySelector('.portfolio-nav-topBtn-C').classList.remove('portfolio-nav-topBtn-now')

                    content_D_part.style.display = 'block';
                    document.querySelector('.portfolio-nav-topBtn-D').classList.add('portfolio-nav-topBtn-now')
                }
            }
        // ]]></script>