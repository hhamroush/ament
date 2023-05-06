import React from 'react';

function Header(){
    return(
            <header>
                <div class="mainHeader">
                    <div class="mainHeaderTop">
                        <ul class="mainHeaderAbout">
                            <li>
                                <div class="icon">
                                    <span class="icon-pin"></span>
                                </div>
                                <div class="text">
                                    <p>
                                        3-5 Mousadak Street El Nahda Tower - 12th &amp; 13th floor
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <span class="icon-email"></span>
                                </div>
                                <div class="text">
                                    <p>
	                                    <a href="mailto:info@ament-egypt.com">info@ament-egypt.com</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="text">
                                    <p><a href="https://makhzankey.com/ament/language?lang=ar">  عربي</a></p>
                                </div>
                            </li>
                        </ul>
                        <div class="mainHeaderSocials">
                        <a href="#" target="_blank" ><i class="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank" ><i class="fab fa-youtube"></i></a>
                        <a href="#" target="_blank" ><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/ament/mycompany/?viewAsMember=true" target="_blank" ><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=+20111111" target="_blank" ><i class="fab fa-whatsapp"></i></a>
                        </div>          
                    </div>
                </div>
            </header>
    );    
}
export default Header;
