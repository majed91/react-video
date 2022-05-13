import React, {Component} from 'React';

class Divo1 extends React.Component{
    render(){
      return(
        <div class="divall">
        <div class="divo1">
          <h3>- hello dear</h3>
         <p>plaese explain your intrsted in sports , so that make us to show your favorite video</p>
         <div class="input-group">
         <input class="form-control"/>
         <div class="input-group-append">
          <button class="btn btn-info">submit</button>
          </div>
          </div>
        </div>
        <div class="divo2">
          <h2>- Type person -</h2> <br />
          <select class="form-control">
            <option>player</option>
            <option>fans</option>
            <option>trainer</option>
            <option>profisioinal</option>
            </select><br />
            <input type="checkbox" / > goals<br />
            <input type="checkbox" / > attachment<br />
            <input type="checkbox" / > offence<br />
            <input type="checkbox" / > deffence<br />
            <input type="checkbox" / > corner<br />
            <input type="checkbox" / > aim kick<br /><br />
            <button class="btn btn-primary btn-block">choose</button>
          </div>
          <div class="divo3">
            <h5>Top of twenty video <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels-fill" viewBox="0 0 16 16">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
</svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg></h5><hr / >
            <div class="smalldiv"><span class="spinner-border spinner-border-sm text-primary"></span> step 1 of 20</div>
            <p>you are almost there , so choose your favorite and watch it ,<br /> once you complete watching go to the all video.</p>
            <button class="btn btn-primary btn-sm">start watching</button>
            </div><br />
     </div>
      )
    }
  }
  export default Divo1;