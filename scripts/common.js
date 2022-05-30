window.addEventListener('DOMContentLoaded', () => {
    let barnav = document.querySelector('header[role="navigation"]');
    barnav.innerHTML = header;
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    let barnav = document.querySelector('footer[role="navigation"]');
    barnav.innerHTML = footer;
  });


// code standing inside nav.js for easy edit
const header = `
  
    <div >
    <a href="/index.html">
    <img src="/assests/images/logo.png" alt="logo" id="logo-id" height="60px" width="60px"></a>
   
<button id="login" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
Login
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">

      <form  action="#"> 
          <div class="mb-3 row">

          <label for="name" class="col-sm-3 col-form-label">Username:</label>
          <div class="col-sm-8">
          <input type="text" name="Name"class="form-control" placeholder="Enter your Username" id="name" required="">
          </div>
      </div>
      
          <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-3 col-form-label">Password:</label>
              <div class="col-sm-8">
                <input type="password" class="form-control"  placeholder="Enter password" id="inputPassword">
              </div>
            </div>
      
            <div class="modal-footer">
              <button id="btnlog" type="submit" value="submit" class="btn btn-primary" >Login</button>
            </div>
      </form>
    </div>
   
  </div>
</div>
</div>
   
</div> 
`;

const footer= ` <div class="col col-12">
<div class="row">
    <div class="contactus col-4">
        <h3 id="contact"><button type="button" class="btn btn-info btn-md mg-10px" data-bs-toggle="modal"
                data-bs-target="#cexampleModal">Contact Us</button></h3>
        <div class="modal fade" id="cexampleModal" tabindex="-1" aria-labelledby="cexampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cexampleModalLabel">Get in touch</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Thank you for reaching out!!!</p>
                        <p>Please enter your email and we will get back to you</p>
                        <form target="/index.html" action="#">
                            <div class="mb-3 row">
                                <label for="emailId" class="col-sm-3 col-form-label">Email :</label>
                                <div class="col-sm-8">
                                    <input type="email" class="form-control" id="emailId" placeholder="Enter your email" required="">
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" value="submit" class="btn btn-primary  "
                                    target="/index.html">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div id="par " class="col col-5">
        <p id="p1"> &copy 2020 ROOM SEARCH PVT. LTD.</p>
    </div>
    <div class="col col-2"></div>
    <div class="col col-1">
        <span id="span2">
            <a href="https://www.facebook.com/"><img class="icon" src="/assests/images/facebook.png"
                    height="20px" width="22px"></a>
            <a href="https://www.instagram.com"><img class="icon" src="/assests/images/instagram.png"
                    height="20px" width="22px"></a>
            <a href="https://www.twitter.com"><img class="icon" src="/assests/images/twitter.png"
                    height="20px" width="22px"></a>
        </span>
    </div>
</div>
</div>`;



