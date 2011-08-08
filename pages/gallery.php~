<?php

function make_thumb($src,$dest,$desired_width)
{
  $source_image = imagecreatefromjpeg($src);
  $width = imagesx($source_image);
  $height = imagesy($source_image);
  $desired_height = floor($height*($desired_width/$width));
  $virtual_image = imagecreatetruecolor($desired_width,$desired_height);
  imagecopyresized($virtual_image,$source_image,0,0,0,0,$desired_width,$desired_height,$width,$height);
  imagejpeg($virtual_image,$dest);
}

if(!function_exists('mime_content_type')) {

    function mime_content_type($filename) {

        $mime_types = array(

            'txt' => 'text/plain',
            'htm' => 'text/html',
            'html' => 'text/html',
            'php' => 'text/html',
            'css' => 'text/css',
            'js' => 'application/javascript',
            'json' => 'application/json',
            'xml' => 'application/xml',
            'swf' => 'application/x-shockwave-flash',
            'flv' => 'video/x-flv',

            // images
            'png' => 'image/png',
            'jpe' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'jpg' => 'image/jpeg',
            'gif' => 'image/gif',
            'bmp' => 'image/bmp',
            'ico' => 'image/vnd.microsoft.icon',
            'tiff' => 'image/tiff',
            'tif' => 'image/tiff',
            'svg' => 'image/svg+xml',
            'svgz' => 'image/svg+xml',

            // archives
            'zip' => 'application/zip',
            'rar' => 'application/x-rar-compressed',
            'exe' => 'application/x-msdownload',
            'msi' => 'application/x-msdownload',
            'cab' => 'application/vnd.ms-cab-compressed',

            // audio/video
            'mp3' => 'audio/mpeg',
            'qt' => 'video/quicktime',
            'mov' => 'video/quicktime',

            // adobe
            'pdf' => 'application/pdf',
            'psd' => 'image/vnd.adobe.photoshop',
            'ai' => 'application/postscript',
            'eps' => 'application/postscript',
            'ps' => 'application/postscript',

            // ms office
            'doc' => 'application/msword',
            'rtf' => 'application/rtf',
            'xls' => 'application/vnd.ms-excel',
            'ppt' => 'application/vnd.ms-powerpoint',

            // open office
            'odt' => 'application/vnd.oasis.opendocument.text',
            'ods' => 'application/vnd.oasis.opendocument.spreadsheet',
        );

        $ext = strtolower(array_pop(explode('.',$filename)));
        if (array_key_exists($ext, $mime_types)) {
            return $mime_types[$ext];
        }
        elseif (function_exists('finfo_open')) {
            $finfo = finfo_open(FILEINFO_MIME);
            $mimetype = finfo_file($finfo, $filename);
            finfo_close($finfo);
            return $mimetype;
        }
        else {
            return 'application/octet-stream';
        }
    }
}
?>

<div class="content-head">
GALLERY
</div>

<div class="content-body">
<div id="gallery">
<ul>
	
<?php 
	$dir = "./images/gallery/";
	if(substr($dir,-1) != '/')
		$dir .= "/";
	if(is_readable($dir)):
		$handle = scandir($dir);
		foreach($handle as $item):
			if($item != '.' && $item != '..' && $item[0]!="." && substr($item,0,5) != "thumb") :
				if(!(is_dir($dir.$item))):
					$type = explode('/', mime_content_type($dir.$item));
					if($type[0] == "image") {
						$thumbName = $dir."thumb_".$item;
						make_thumb($dir.$item, $thumbName, 72);
						echo <<<IMG
<li>
<a href="{$dir}{$item}" title="{$item} <Festember X Memories>">
    <img src="{$thumbName}" width="72" height="72" alt="" />
</a>
</li>
IMG;
					}
				endif;
			endif;
		endforeach;
	endif;
	
?>
</ul>
</div>
<div class="clearer"></div>
</div>
