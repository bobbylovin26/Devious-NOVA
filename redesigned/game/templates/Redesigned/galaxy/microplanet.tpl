			<td rel="#planet{pos}" class="TTgalaxy microplanet" style="position:relative; background:url({{skin}}/{micro_planet_img}) no-repeat top center;">
				<a onmouseover="Tip('<div id=planet{pos}>\n\t<div id=TTWrapper>\n\t\t<div id=tooltipBody class=tooltipBody>\t\n\t\t\t<span class=tooltip_sticky>\n\t\t\t\t<div class=TTInner id=TTPlanet>\n\t\t\t\t\t<table cellpadding=0 cellspacing=0>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th colspan=2><span class=spacing>Planet {planet_name} {activity} Activity: 28m </span></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=body>\n\t\t\t\t\t\t\t<td class=planetimg>\n\t\t\t\t\t\t\t\t<span id=pos-planet>[{galaxy}:{system}:{pos}]</span>\t\t\n\t\t\t\t\t\t\t\t<img src={{skin}}/{micro_planet_img} alt={planet_name} height=30 width=30/>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=actions>\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li><a href=# onclick=loadpage(\'./?page=fleet1\',\'{Fleet}\',\'fleet1\');>{Fleet}</a></li>\n\t\t\t\t\t\t\t\t\t{phalanx}\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=footer style=\'background:url({{skin}}/img/tooltip/ttfooter.gif) no-repeat top center;height:11px;\'>\n\t\t\t\t\t\t\t<td colspan=2></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>',BGCOLOR,'',FONTCOLOR,'#FFFFFF',BORDERWIDTH,0,FOLLOWMOUSE,false,STICKY,true,DURATION,5000)" onmouseout="UnTip()">	
					<img src="{{skin}}/img/layout/pixel.gif" width="30" height="30" />
				</a>				
			</td>
